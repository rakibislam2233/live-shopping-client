"use server";

export async function handleRegister(values) {
  // Log the values received from the client
  console.log("Form values received:", values);

  try {
    // Simulate server-side processing like saving user data to the database
    const response = await fetch("https://your-api.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error("Registration failed");
    }

    const result = await response.json();
    return result; // Return success message or result
  } catch (error) {
    console.error("Registration Error:", error);
    throw new Error("Error during registration");
  }
}
export async function handleLogin(values) {
  // Process form submission on the server
  console.log("Form values received:", values);

  const response = await fetch("https://your-api.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const result = await response.json();
  return result;
}
