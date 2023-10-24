import React from "react";
import "./style.scss";
interface Props {

}

const HomePage : React.FC<Props> = (props) => {
	return (
		<div className="HomePageWrapper">
			<nav className="HomePageWrapper-Header">
				<div className="HomePageWrapper-Header-Item">
					Profile
				</div>
			</nav>

			<main className="HomePageWrapper-MainContent">
				<div className="HomePageWrapper-MainContent-Items">
					<div className="HomePageWrapper-MainContent-Item">
						Word title
					</div>
					<div className="HomePageWrapper-MainContent-Item">
						Word title
					</div>
					<div className="HomePageWrapper-MainContent-Item">
						Word title
					</div>
					<div className="HomePageWrapper-MainContent-Item">
						Word title
					</div>
					<div className="HomePageWrapper-MainContent-Item">
						Word title
					</div>
					<div className="HomePageWrapper-MainContent-Item">
						Word title
					</div>
					<div className="HomePageWrapper-MainContent-Item">
						Word title
					</div>

				</div>
			</main>
		</div>
	)
}

export default HomePage;