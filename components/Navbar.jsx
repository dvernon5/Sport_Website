function Navbar() {
    return (
        <header>
            <nav>
                <a href="../index.html">
                    <img 
                        id="self-avatar" 
                        src="../src/assets/self-avatar.png" 
                        alt="avatar-image" 
                    />
                </a>
                <ul id="unorder-list">
                    <li><a href="pages/favorite-sport.html">Favorite Sport</a></li>
                    <li><a href="pages/favorite-team.html">Favorite Team</a></li>
                    <li><a href="pages/favorite-player.html">Favorite Player</a></li>
                    <li><a href="pages/contact.html">Contact Me</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar