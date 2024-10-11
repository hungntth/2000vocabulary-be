import { Injectable } from '@nestjs/common';
import { promises } from 'fs';
import { join } from 'path';
import OpenAI from 'openai';

@Injectable()
export class OpenAIService {
  async createVocabularyMp3File(vocabulary: string): Promise<void> {
    const openai = new OpenAI({
      apiKey: process.env.API_KEY_OPEN_AI,
    });

    const speechFile = join(`./public/mp3/${vocabulary}.mp3`);
    const mp3 = await openai.audio.speech.create({
      model: 'tts-1',
      voice: 'alloy',
      input: vocabulary,
    });

    const buffer = Buffer.from(await mp3.arrayBuffer());
    await promises.writeFile(speechFile, buffer);
  }
}
