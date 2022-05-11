import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

describe('Submit feedback', ()=>{
    it('should submit feedback', async ()=>{
      const submitFeedback= new SubmitFeedbackUseCase(
        { create: async ()=> { }},
        {sendMail: async ()=> { }},
      )

      await expect(submitFeedback.execute({
        type: 'BUG',
        comment:'exemplo de comment',
        screenshot: 'exemplo de screenshot',
      })).resolves.not.toThrow();
    });
})
