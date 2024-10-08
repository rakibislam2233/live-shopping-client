import LiveStream from "@/components/LiveStream/LiveStream";
export const metadata = {
  title: "Live Stream",
  description: "Watch our live stream",
  keywords: ["live stream", "streaming", "video"],
  image: "/favicon.ico",
  url: "/live-stream",
  twitter: {
    handle: "@your_twitter_handle",
    site: "@your_twitter_site",
    cardType: "summary_large_image",
  },
}
const page = () => {
  return <LiveStream />;
};

export default page;
