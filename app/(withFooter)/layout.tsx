import { Footer } from "../_components/Footer";
import RootLayout from "../layout";

export default async function FooterLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <RootLayout>
        {children}
        <Footer />
      </RootLayout>
    );
  }