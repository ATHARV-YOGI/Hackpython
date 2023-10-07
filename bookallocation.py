def is_valid(arr, n, m, mid):
    students = 1
    pages_read = 0

    for i in range(n):
        if arr[i] > mid:
            return False

        if pages_read + arr[i] > mid:
            students += 1
            pages_read = arr[i]
        else:
            pages_read += arr[i]

        if students > m:
            return False

    return True

def find_minimum_pages(arr, n, m):
    low = max(arr)
    high = sum(arr)
    result = float('inf')

    while low <= high:
        mid = (low + high) // 2

        if is_valid(arr, n, m, mid):
            result = min(result, mid)
            high = mid - 1
        else:
            low = mid + 1

    return result

# Example usage
books = [12, 34, 67, 90]
students = 2

min_pages = find_minimum_pages(books, len(books), students)
print(f"The minimum number of pages a student should read is: {min_pages}")
