import { botConfig, systemPrompt } from '../src/config/bot.config';

describe('Bot Configuration', () => {
  describe('botConfig', () => {
    it('should have required properties', () => {
      expect(botConfig).toHaveProperty('model');
      expect(botConfig).toHaveProperty('parameters');
    });

    it('should have valid model', () => {
      expect(typeof botConfig.model).toBe('string');
      expect(botConfig.model.length).toBeGreaterThan(0);
    });

    it('should have valid parameters', () => {
      expect(botConfig.parameters).toHaveProperty('max_tokens');
      expect(botConfig.parameters).toHaveProperty('temperature');
      expect(botConfig.parameters).toHaveProperty('top_p');
      expect(botConfig.parameters).toHaveProperty('frequency_penalty');
      expect(botConfig.parameters).toHaveProperty('presence_penalty');
    });

    it('should have valid parameter values', () => {
      expect(botConfig.parameters.max_tokens).toBeGreaterThan(0);
      expect(botConfig.parameters.temperature).toBeGreaterThanOrEqual(0);
      expect(botConfig.parameters.temperature).toBeLessThanOrEqual(2);
      expect(botConfig.parameters.top_p).toBeGreaterThan(0);
      expect(botConfig.parameters.top_p).toBeLessThanOrEqual(1);
    });
  });

  describe('systemPrompt', () => {
    it('should be a string', () => {
      expect(typeof systemPrompt).toBe('string');
    });

    it('should not be empty', () => {
      expect(systemPrompt.length).toBeGreaterThan(0);
    });

    it('should contain climbing-related content', () => {
      expect(systemPrompt.toLowerCase()).toContain('escalade');
    });
  });
});
