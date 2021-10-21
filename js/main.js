import { getRandomGeneration } from './data/get-similar-generation.js';

const getSimilarGeneration = Array.from({ length: 11 }, getRandomGeneration);
console.log(getSimilarGeneration);
