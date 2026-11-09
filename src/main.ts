/**
 * Hàm tính số Fibonacci tại vị trí n bằng đệ quy
 * @param n Vị trí cần tính (n >= 0)
 * @returns Giá trị Fibonacci tại vị trí n
 */
function fibonacci(n: number): number {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Hàm hiển thị dãy Fibonacci n phần tử và tính tổng
 * @param count Số lượng phần tử cần hiển thị
 */
function displayFibonacciSequence(count: number): void {
    let sum: number = 0;
    const sequence: number[] = [];

    console.log(`--- DÃY FIBONACCI VỚI ${count} PHẦN TỬ ---`);

    for (let i = 0; i < count; i++) {
        const currentFib: number = fibonacci(i);
        sequence.push(currentFib);
        sum += currentFib;
    }

    // Hiển thị dãy số và tổng
    console.log(`Dãy số: ${sequence.join(", ")}`);
    console.log(`Tổng của dãy số: ${sum}`);
}

// Chạy chương trình thử nghiệm với 10 phần tử đầu tiên
const numberOfElements: number = 10;
displayFibonacciSequence(numberOfElements);