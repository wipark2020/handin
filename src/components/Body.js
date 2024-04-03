import {useState} from 'react';
import './Body.css';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; 

function Body() {
    const recipeImage1 = '/images/recipe.jpg';
    const recipeImage2 = '/images/recipe_notification.png';
    const [currentImage, setCurrentImage] = useState(recipeImage1);
    const toggleImageForward = () => {
        setCurrentImage(currentImage === recipeImage1 ? recipeImage2 : recipeImage1);
    };
return (
    <div className='body-container'>
        <section id="section1" aria-label='Introduction'>
            <h2>Introduction</h2>
            <p>Design principles are certainly useful if you also know how to implement them through front-end knowledge and skills. The following is my example of developing an interactive interface using React where the task is to make an interface for users to select items out of a list, which aggregates them such as an online shopping platform.</p>
        </section>
        <section id="section2" aria-label='Competitive Analysis'>
            <h2>Competitive Analysis</h2>
            <p>To get a better understanding of how other organizations design their products, a competitive analysis is used. It helps in creating strategies to improve one’s own product to gain more of the target customer base from the other competitors by observing strengths and weaknesses, market gaps and opportunities, and any threat in the market. </p>
            <p>To do this, I will identify three different competitor’s websites with a favoriting function, particularly how they organize information that is pertinent to the user and how they utilize aggregators where an aggregator is a list that keeps track of items. An example of this can be shopping carts or favorites lists. </p>
            <p>For each website, I will observe how they sort and filter information in their favoriting function where I will ask the questions: How do these decisions impact the user?; What works well on this page and what doesn't?. Through this analysis, I will write these down in a Competitive Comparison Chart. A Competitive Comparison Chart includes factors related to the favoriting function that can be used to evaluate the websites against each other. </p>
            <p>This is what a comparison table looks like. An example of utilizing the table is comparing smartphones where Product A being Apple, Product B being Samsung, and Product C being Google and Factor 1 can be iMessage where Product A has it but Product B and C do not. </p>
            <img src="./images/table_example.png" alt="Comparison Table Example" aria-label='Example tabel'/>
            <p>I have selected the websites:  
            <a href="https://www.realtor.com/realestateandhomes-search/Providence_RI" target="_blank" rel="noopener noreferrer"> realtor.com</a>, 
            <a href="https://www.allrecipes.com/search?q=smoothies" target="_blank" rel="noopener noreferrer"> allrecipes.com</a>, and 
            <a href="https://bigfuture.collegeboard.org/scholarship-search" target="_blank" rel="noopener noreferrer"> bigfuture.collegeboard.org/scholarship-search</a>. 
            I have identified 6 factors related to the favoriting functions in each website.
            </p>
            <table>
            <thead>
                <tr>
                <th>Feature</th>
                <th>realtor</th>
                <th>allrecipes</th>
                <th>bigfuture</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Favoriting Button with changing of color when clicked</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
                </tr>
                <tr>
                <td>Notifications if favorited or unfavorited</td>
                <td>No</td>
                <td>Yes</td>
                <td>Yes</td>
                </tr>
                <tr>
                <td>Aggregate Number of Favorites Displayed</td>
                <td>No</td>
                <td>No</td>
                <td>Yes</td>
                </tr>
                <tr>
                <td>Filter options near the Search Bar</td>
                <td>Yes</td>
                <td>No</td>
                <td>Yes</td>
                </tr>
                <tr>
                <td>Image of item occupies the entire space</td>
                <td>Yes</td>
                <td>No</td>
                <td>Yes</td>
                </tr>
                <tr>
                <td>Button options are different based on type</td>
                <td>Yes</td>
                <td>No</td>
                <td>Yes</td>
                </tr>
                <tr>
                <td>Hierarchy of important information where important numbers and facts are included on the card</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
                </tr>
            </tbody>
            </table>
            <p>All of these websites have a favoriting function. All the websites require a Login, so I have included images and highlights of the factors that I am talking about. </p>
            <p><b>Note: </b>Next to each factor discussed is a number which corresponds to the one on the image.</p>
            <img src="./images/realtor.jpg" alt="Realtor Website" aria-label='Realtor Website'/>
            <p>The website 
                <a href="https://www.realtor.com/realestateandhomes-search/Providence_RI" target="_blank" rel="noopener noreferrer"> <b>realtor.com </b></a>
                is a website where you can search for living spaces (houses, apartments) for sale or rent. The main page that I used to start my analysis was the page once I searched for ‘Providence, RI’. 
            </p>
            <ol className='indented-list'>
                <li>
                    The layout of each item card is consistent, all with high-quality images, descriptions, and prices appearing in the same place.
                </li>
                <li>
                    The hierarchy of the website also helped in distinguishing the important information for the user, making the price and details pop out to the user.
                </li>
                <li>
                    When the favorite button is clicked, the color of the heart changes to red, which helps in color contrast to identify that the button was clicked. The difference in the types of buttons also helps in determining which buttons are what.
                </li>
                <li>
                    The one factor that I wish they included would be adding text to the header near the heart to state that it is the 'Favorites' section.
                </li>
            </ol>
            <div className="image-container">
                    <img src={currentImage} alt="Recipe Website" aria-label='Recipe Website' />
                    <IconButton className="image-overlay-button right" onClick={toggleImageForward} aria-label="Next image">
                        <ArrowForwardIosIcon />
                    </IconButton>
            </div>
            <p>The website 
            <a href="https://www.allrecipes.com/search?q=smoothies" target="_blank" rel="noopener noreferrer"> <b>allrecipes.com</b> </a>
            is a website where you can search for recipes to cook. The main page that I used to start my analysis was the page once I searched for ‘Smoothies’. 
            </p>
            <ol className='indented-list'>
                <li>
                The website did not have an option to select filters based on what was searched. 
                </li>
                <li>
                The item cards did not all have the favoriting button, so there was no consistency in the results where you would get a smoothie recipe but also an article about smoothies. A filtering option would be great to ensure that the appropriate results would be given. 
                </li>
                <li>
                The layout of the website can also be improved where once searched for ‘Smoothies’, there are two search bars both with the same functionality. The font-size and color contrast were both readable. 
                </li>
                <li>
                However, there was a linear layout in presenting the header, search results, and item cards. There is no real-time filtering, so if you want to observe all the recipes, you have to type in a specific recipe that you want. 
                </li>
                <li>
                The notifications were a problem. When a user favorites a recipe, an entire pop-up that occupies the entire page shows up, so that the user would need to exit out of the pop-up everytime. This is a major problem as it makes the interaction with the website slow. If a user wants to favorite multiple recipes at a time, they would need to go through this interaction everytime. 
                </li>
            </ol>
            <img src="./images/scholarship.jpg" alt="Scholarship Website" aria-label='Scholarship Website'/>
            <p>The website 
            <a href="https://bigfuture.collegeboard.org/scholarship-search" target="_blank" rel="noopener noreferrer"> <b>bigfuture.collegeboard.org/scholarship-search</b> </a>
            is a website where you can search for scholarships.
            </p>
            <ol className='indented-list'>
                <li>
                The banner “Find the right scholarships for you” messes with the layout of the website where the search and filter options are separate from each other, interrupting the flow for the user to search for more options for results. The banner’s vibrant color also attracts the user to seek that it is important, but there is no functionality with it, which can be fixed. 
                </li>
                <li>
                The favoriting button changes color which provides good color contrast to easily identify that the button was clicked. 
                </li>
                <li>
                The favoriting aggregation showed the number of favorited scholarships which helps the user quickly identify how many scholarships they saved
                </li>
                <li>
                The notification system helps in accessibility and does not take up the entire screen which helps in utilization of the website. 
                </li>
            </ol>
            <p>Based on the above descriptions of the factors and designs that were most/least successful, the following list are features that I want to incorporate:</p>
            <ol className='indented-list'>
                <li>
                Favoriting button with changing of color when clicked
                </li>
                <li>
                Notifications if favorited or unfavorited
                </li>
                <li>
                Aggregate Number of Favorites Displayed
                </li>
                <li>
                Filter options near the Search Bar
                </li>
                <li>
                Image of item occupies the entire space
                </li>
                <li>
                Button options are different based on type
                </li>
                <li>
                Hierarchy of important information where important numbers and facts are included on the card
                </li>
            </ol>
        </section>
        <section id="section3" aria-label='Creating Interface'>
            <h2>Creating Interface</h2>
            <p><b>Note: </b>This app is made with React, CSS, and HTML. There is no usage of open-source frameworks for functionality aspects which include filtering and sorting nor is there usage of online templates for the interface code. Material UI React is the only component library utilized. </p>
            <p>For my theme, I want to make an app that is a biography website and favorites the people in the list. The reason why this app is important is because there are so many important people in the world, but there should be ease of access to find these people and figure out how to filter and sort them based on your own preferences then it would be beneficial to the user to help them find any person that meets their criteria. In terms of filtering, I will be filtering by type of occupation and gender. In terms of sorting, I will be sorting by name and age. In terms of aggregation, I will be including a list where the favorited items will be posted underneath the “Favorite Biographies” title and in front will include the number of favorite people there are. </p>
            <p>In making my interface, I have included: </p>
            <ul className='feature-list'>
                <li>2 filtering categories
                    <ul>
                        <li>Gender</li>
                        <li>Occupation</li>
                    </ul>
                </li>
                <li>2 sorting feature
                    <ul>
                        <li>Name</li>
                        <li>Age</li>
                    </ul>
                </li>
                <li>Aggregator section as “Favorite Biographies”
                    <ul>
                        <li>Items are added to favorite biographies</li>
                        <li>Count of each is updated based on how many items are added</li>
                        <li>Filtering and Searching Categories also change the total biographies in the list</li>
                    </ul>
                </li>
                <li>Reset functionality
                    <ul>
                        <li>Removes all filters and search queries</li>
                    </ul>
                </li>
                <li>14 item cards
                    <ul>
                        <li>Person’s Image</li>
                        <li>Person’s Name</li>
                        <li>Categories: Occupation, Gender</li>
                        <li>Fields: Name, Age</li>
                        <li>Heart button that adds and removes from aggregator</li>
                    </ul>
                </li>
            </ul>
            <p>An example of my design can be seen below through a low-fi mockup: </p>
            <img src="./images/mockup.png" alt="Low-fi Mockup" aria-label='Low-fi Mockup'/>
        </section>
        <section id="section4" aria-label='Deployment'>
            <h2>Deployment</h2>
            <p><b>Note: </b>This app is deployed through Vercel.  </p>
            <p>The app deployed can be found at this link: 
            <a href="https://biography-app.vercel.app/" target="_blank" rel="noopener noreferrer"> <b>https://biography-app.vercel.app/</b> </a> </p>
        </section>
    </div>
);
}

export default Body;
