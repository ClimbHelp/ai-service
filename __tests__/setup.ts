// Configuration globale pour les tests
import dotenv from 'dotenv';

// Charger les variables d'environnement de test
dotenv.config({ path: '.env.test' });

// Configuration globale Jest
beforeAll(() => {
  // Setup global pour tous les tests
  process.env.NODE_ENV = 'test';
  process.env.OPENAI_API_KEY = 'sk-test-key-for-testing-only';
});

afterAll(() => {
  // Cleanup global après tous les tests
});
