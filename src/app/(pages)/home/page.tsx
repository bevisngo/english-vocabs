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
						Word title 2
					</div>
					<div className="HomePageWrapper-MainContent-Item">
						Word title 3
					</div>
					<div className="HomePageWrapper-MainContent-Item">
						Word title 4
					</div> 
					<div className="HomePageWrapper-MainContent-Item">
						Word title 5
					</div>
					<div className="HomePageWrapper-MainContent-Item">
						Word title 6
					</div>
					<div className="HomePageWrapper-MainContent-Item">
						Word title 7
					</div>

				</div>
			</main>
		</div>
	)
}

export default HomePage;