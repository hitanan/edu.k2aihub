import { createSlug } from '@/utils/slug';

// Test slug generation
console.log('Testing slug generation:');
console.log('Thành phố Hà Nội ->', createSlug('Thành phố Hà Nội')); // should be "ha-noi"
console.log('Thành phố Đà Nẵng ->', createSlug('Thành phố Đà Nẵng')); // should be "da-nang"
console.log('Thành phố Hồ Chí Minh ->', createSlug('Thành phố Hồ Chí Minh')); // should be "ho-chi-minh"
console.log('Cao Bằng ->', createSlug('Cao Bằng')); // should be "cao-bang"
console.log('Điện Biên ->', createSlug('Điện Biên')); // should be "dien-bien"

export {};
