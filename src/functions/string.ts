function capitalize(string: string): string {
    if (!string) {
        return string;
    }

    if (string.length === 1) {
        return string.toUpperCase();
    }

    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export { capitalize };