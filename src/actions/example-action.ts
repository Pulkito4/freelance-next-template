"use server";

/**
 * Next.js Server Actions.
 *
 * Provide robust API actions.
 * Always implement robust `try/catch` blocks and return standardized error objects.
 * Do not return sensitive data or unhandled exceptions.
 */

export async function exampleAction(data: string) {
    try {
        if (!data) throw new Error("Data is required");

        // Simulate backend processing
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return {
            success: true,
            message: `Successfully processed ${data}`,
        };
    } catch (error: any) {
        console.error("Action error:", error);
        return {
            success: false,
            error: error.message || "An unknown error occurred",
        };
    }
}
