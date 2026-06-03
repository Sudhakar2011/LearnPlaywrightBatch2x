var name = "Sudhakar";
var firstName = "Sudhakar"; //CamelCase

var first_name = "Sudhakar"; //snake_case


// ===== NAMING CONVENTIONS (CASES) IN JAVASCRIPT =====

// 1. camelCase  → variables, functions, object properties
let firstName = "John";
let lastName = "Doe";
let totalPrice = 150.75;

// 2. PascalCase  → classes, constructors, React components
class UserProfile { constructor(name) { this.name = name; } }
function CarModel(brand) { this.brand = brand; }
const HomePage = () => null; // React component

// 3. snake_case  → rarely in JS, sometimes for constants or Python-style
let user_name = "alice";
let max_retry_count = 3;
const API_BASE_URL = "https://api.example.com";

// 4. SCREAMING_SNAKE_CASE  → global constants / magic values
const MAX_SIZE = 100;
const DEFAULT_TIMEOUT_MS = 5000;
const COLOR_RED = "#FF0000";


// 5. Hungarian notation  → prefix with type (legacy, rarely used now)
let strName = "hello";
let intCount = 42;
let arrItems = [1, 2, 3];
let fnCallback = () => { };