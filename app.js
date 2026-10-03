    } else if (e.key === '1') {
      e.preventDefault();
      markCardConfidence(false);
    } else if (e.key === '2') {
      e.preventDefault();
      markCardConfidence(true);
    }
  }
});
// ==========================================
// 14. APP INITIALIZATION
// ==========================================
function initApp() {
  loadState();
  // Apply theme
  applyTheme(state.settings.theme || 'dark');
  document.getElementById('theme-toggle-btn').onclick = toggleTheme;
  // Init Timer
  setPomodoroMode('study');
  // Init Flashcards & Decks
  renderFlashcardsView();
  renderDecksGrid();
  renderCardsInspector();
  // Init Quizzes & Settings
  populateQuizSourceOptions();
  populateSettingsInputs();
  updateStatsHeader();
}
// Launch on DOM ready
document.addEventListener('DOMContentLoaded', initApp);
