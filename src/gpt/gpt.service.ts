import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { orthographyCheckUseCase, prosConsDiscusserUseCase } from './use-cases';
import { OrthographyDto } from './dtos/orthography.dto';
import { ProsConsDiscusserDto } from './dtos';

@Injectable()
export class GptService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async orthographyCheck(orthographyDto: OrthographyDto) {
    return await orthographyCheckUseCase(this.openai, {
      prompt: orthographyDto.prompt,
    });
  }

  async prosConsDiscusser({ prompt }: ProsConsDiscusserDto) {
    return await prosConsDiscusserUseCase(this.openai, { prompt });
  }
}
