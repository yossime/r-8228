import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Check, X } from "lucide-react";

const Admin = () => {
  const [quotes, setQuotes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkUser();
    fetchQuotes();
  }, []);

  const checkUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const allowedUsers = [
      "ccb2f976-19c9-4711-82fd-fbc5df14deb3",
      "a6445055-afa8-440f-b388-10a7e3d897ca",
    ];
    if (!user || !allowedUsers.includes(user.id)) {
      navigate("/");
      toast({
        title: "Access Denied",
        description: "You don't have permission to access this page.",
        variant: "destructive",
      });
    }
  };

  const fetchQuotes = async () => {
    try {
      const { data, error } = await supabase
        .from("quotes")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setQuotes(data || []);
    } catch (error: any) {
      console.error("Error fetching quotes:", error);
      toast({
        title: "Error",
        description: "Failed to fetch quotes",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateQuoteStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from("quotes")
        .update({ status })
        .eq("id", id);

      if (error) throw error;

      setQuotes(
        quotes.map((quote) => (quote.id === id ? { ...quote, status } : quote))
      );

      toast({
        title: "Success",
        description: `Quote marked as ${status}`,
      });
    } catch (error: any) {
      console.error("Error updating quote:", error);
      toast({
        title: "Error",
        description: "Failed to update quote status",
        variant: "destructive",
      });
    }
  };

  const deleteQuote = async (id: string) => {
    try {
      const { error } = await supabase.from("quotes").delete().eq("id", id);

      if (error) throw error;

      setQuotes(quotes.filter((quote) => quote.id !== id));

      toast({
        title: "Success",
        description: "Quote deleted successfully",
      });
    } catch (error: any) {
      console.error("Error deleting quote:", error);
      toast({
        title: "Error",
        description: "Failed to delete quote",
        variant: "destructive",
      });
    }
  };

  const getStatusBadge = (status: string) => {
    const statusColors: Record<string, string> = {
      pending: "bg-yellow-100 text-yellow-800",
      approved: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
    };
    return (
      <Badge className={statusColors[status] || "bg-gray-100 text-gray-800"}>
        {status}
      </Badge>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        טוען...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8" dir="rtl">
      <h1 className="text-3xl font-bold mb-8 text-center">
        לוח בקשות הצעות מחיר
      </h1>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <Table className="min-w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="whitespace-nowrap">תאריך</TableHead>
                <TableHead className="whitespace-nowrap">שם</TableHead>
                <TableHead className="whitespace-nowrap">אימייל</TableHead>
                <TableHead className="whitespace-nowrap">טלפון</TableHead>
                <TableHead className="whitespace-nowrap">סוג פרויקט</TableHead>
                <TableHead className="whitespace-nowrap">סטטוס</TableHead>
                <TableHead className="whitespace-nowrap">פעולות</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quotes.map((quote) => (
                <TableRow key={quote.id}>
                  <TableCell>
                    {new Date(quote.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{quote.name}</TableCell>
                  <TableCell>{quote.email}</TableCell>
                  <TableCell>{quote.phone}</TableCell>
                  <TableCell>{quote.project_type}</TableCell>
                  <TableCell>{getStatusBadge(quote.status)}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-green-50 hover:bg-green-100"
                        onClick={() => updateQuoteStatus(quote.id, "approved")}
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-red-50 hover:bg-red-100"
                        onClick={() => updateQuoteStatus(quote.id, "rejected")}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-gray-50 hover:bg-gray-100"
                        onClick={() => deleteQuote(quote.id)}
                      >
                        מחק
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
