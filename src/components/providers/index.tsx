import ReactQueryProvider from "./components/next-query-providers";

type ProvidersProps = {
  children: React.ReactNode;
};
export default function Providers({ children }: ProvidersProps) {
  //Translations

  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
