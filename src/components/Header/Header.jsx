import { BsStars } from "react-icons/bs";

function PageTitle() {
    const titlePage = 'Home'
    return (
        <h1 className="page-title">{titlePage}</h1>
    )
}
function TopTweets() {
    return (
        <BsStars className="top-tweets"/>
    )
}
export default function Header() {
    return (
        <header className='header'>
            <PageTitle />
            <TopTweets />
        </header>
    )
}
  