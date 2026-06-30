let attempts = 3;

if (attempts === 3) {
    console.log("Account Locked — Contact support");
} else if (attempts === 2) {
    console.log("1 attempt left before lockout");
} else if (attempts === 0) {
    console.log("Login successful");
}