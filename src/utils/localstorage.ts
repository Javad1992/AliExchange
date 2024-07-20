export function getStorageValue<T>(key: string): T | null {
    const saved: string | null = localStorage.getItem(key);
    const initial: T | null = !!saved ? JSON.parse(saved) : null;
    return initial;
}

export function setStorageValue<T>(key: string, value: T) {        
    localStorage.setItem(key, JSON.stringify(value));
}