export interface Notification {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
  code?: string;
}

export const notifications: Notification[] = [
  {
    id: "1",
    type: "success",
    title: "Purchase Successful",
    message: "Thanks for your purchase! Your mix tape is ready to download. Check your Downloads section now.",
  },
  {
    id: "2",
    type: "error",
    title: "Payment Failed",
    message: "Oops! Your payment didn't go through. Please try again or use a different method.",
  },
  {
    id: "3",
    type: "info",
    title: "Flash Sale Alert!",
    message: "Get 20% OFF all Mix Tapes this weekend only. Limited time drop, don't miss out",
    code: "QQ12YXK",
  }
];