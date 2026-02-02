import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export function useForums() {
  const [forums, setForums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForums = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("forums")
        .select(`
          id,
          title,
          description,
          category_id,
          categories (
            id,
            title
          )
        `)
        .order("created_at", { ascending: true });

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }

      const grouped = data.reduce((acc, forum) => {
        const category = forum.categories;

        if (!acc[category.id]) {
          acc[category.id] = {
            category,
            forums: [],
          };
        }

        acc[category.id].forums.push(forum);
        return acc;
      }, {});

      setForums(Object.values(grouped));
      setLoading(false);
    };

    fetchForums();
  }, []);

  return { forums, loading, error };
}
