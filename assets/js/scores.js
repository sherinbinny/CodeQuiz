
// Print the top scores
function printHighscores()
{
    const highscores = JSON.parse(localStorage.getItem("highscores")) || []; // Get highscores from storage
    
    // Sort highscores
    highscores.sort((a, b) => b.score - a.score); 
  
    // Loop through and display each high score
    highscores.forEach(function(score)
    {
        // Create list item for each score and add to list
        const liTag = document.createElement('li');
        liTag.textContent = `${score.initials} - ${score.score}`;
        document.getElementById('highscores').appendChild(liTag);
    });
}
  
// Function to clear high scores from local storage
function clearHighscores()
{
    localStorage.removeItem("highscores"); // Remove scores from storage
    document.getElementById('highscores').innerHTML = "";
}
  
// On clicking clear highscores button
document.getElementById('clear').addEventListener('click', clearHighscores);
  
// Run printHighscores when page loads
printHighscores();
  