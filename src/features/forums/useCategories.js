import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("order_index", { ascending: true });

      if (error) {
        setError(error.message);
      } else {
        setCategories(data);
      }

      setLoading(false);
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
}
