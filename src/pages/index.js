import Footer from "../components/Footer";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Layout from "../components/Layout";


export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <InfoSection />
        <Footer />
      </Layout>
    </div>
  )
}
