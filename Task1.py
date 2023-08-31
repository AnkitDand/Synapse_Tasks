def primecheck(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True


def find_divisors(n):
    divisors = []
    for i in range(1, n + 1):
        if n % i == 0:
            divisors.append(i)
    return divisors


def prime_or_divisors(start, end):
    result = {}
    for num in range(start, end):
        if primecheck(num):
            result[num] = bin(num)[2:]
        else:
            result[num] = find_divisors(num)
    return result


start = int(input("Enter the Start of the range: "))
end = int(input("Enter the End of the range: "))

result_dict = prime_or_divisors(start, end)
print(result_dict)
