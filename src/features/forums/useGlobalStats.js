import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export function useGlobalStats() {
  const [global, setGlobal] = useState([]);
  const [Globalloading, setGloballoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      setGloballoading(true);

      const { data, error } = await supabase
        .from("global_stats")
        .select("*");

      if (error) {
        setError(error.message);
      } else {
        setGlobal(data);
      }

      setGloballoading(false);
    };

    fetchStats();
  }, []);

  return { global, Globalloading, error };
}
