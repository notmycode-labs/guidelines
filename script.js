document.addEventListener("DOMContentLoaded", function() {
    const rules = [
        "1. DDoS or Illegal Activities are not permitted on our services.",
        "2. No talking about security. Only Femboys Talk are permitted.",
        "3. 500 Internal Server Error.",
        "4. If It works then it works.",
        "5. Your code must be in assembly. And It must be encoded with base64.",
        "6. All discussions about java and kotlin are not permitted.",
        "7. 404 Not Found.",
        "8. https://testing123.notmycode.dev/ will always be offline.",
        "9. 401 Unauthorized.",
        "10. r/femboy are not permitted. But r/femboys are permitted.",
        "11. Only one comment per post.",
        "12. Cheese Pizza are not permitted.",
        "13. 503 Service Unavailable.",
        "14. No talking about politics.",
        "15. 403 Forbidden.",
        "16. Hello World are not permitted.",
        "17. All comments in code must be in uwu speak.",
        "18. SSL Certificate is required for everything, Including uhhhhh idk",
        "19. 501 Not Implemented."
    ];

    const rulesList = document.getElementById('rules-list');

    rules.forEach(rules => {
        const li = document.createElement('li');
        li.textContent = rules;
        rulesList.appendChild(li);
    });
});
