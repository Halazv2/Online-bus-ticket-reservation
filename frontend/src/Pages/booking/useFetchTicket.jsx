import axios from "axios";
import { useEffect, useState } from "react";

const useFetchTicket = (id) => {
  const [state, setState] = useState({
    ticket: undefined,
    isLoading: true,
  });
  useEffect(() => {
    const getTicket = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/v1/mekna7/getTicketByID/${id}`
        );
        setTimeout(() => {
          setState({
            ticket: res.data,
            isLoading: false,
          });
        }, 1000);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (state.isLoading) {
      getTicket();
    }
  }, [state.isLoading, id]);

  return state;
};

export default useFetchTicket;
