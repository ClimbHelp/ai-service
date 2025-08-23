// Mock OpenAI pour les tests
export const mockOpenAI = {
  chat: {
    completions: {
      create: jest.fn().mockResolvedValue({
        choices: [{
          message: {
            content: 'Test response from AI'
          }
        }]
      })
    }
  }
};

export const mockOpenAIError = {
  chat: {
    completions: {
      create: jest.fn().mockRejectedValue(new Error('OpenAI API error'))
    }
  }
};
