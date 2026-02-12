import Header from './Header'   // ✅ now points to the file we create below
import Hero from './Hero'       // ✅ now points to the file we create below

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Hero />
        </div>
    )
}

export default LandingPage
