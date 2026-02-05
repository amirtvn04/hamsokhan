import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [Categoryloading, setCategoryloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setCategoryloading(true);

      const { data, error } = await supabase
        .from("category_stats")
        .select("*")
        .order("order_index", { ascending: true });

      if (error) {
        setError(error.message);
      } else {
        setCategories(data);
      }

      setCategoryloading(false);
    };

    fetchCategories();
  }, []);

  return { categories, Categoryloading, error };
}
