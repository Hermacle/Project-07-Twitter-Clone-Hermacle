function PageTitle() {
    return (
        <h1 className="page-title">Home</h1>
    )
}
function TopTweets() {
    return (
        <span className="top-tweets">Icone</span>
    )
}
function Header() {
    return (
        <header className='header'>
            <PageTitle />
            <TopTweets />
        </header>
    )
}
export default Header; 