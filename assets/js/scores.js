
// Print the top scores
function printHighscores()
{
    const highscores = JSON.parse(localStorage.getItem("highscores")) || []; // Get highscores from storage
    
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
  