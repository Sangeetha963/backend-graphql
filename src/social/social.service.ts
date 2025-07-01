// src/social/social.service.ts
import { Injectable } from '@nestjs/common';
import { Post } from './social.model';

@Injectable()
export class SocialService {
  private posts: Post[] = [];

  createPost(caption: string, imageUrl: string, author: string): Post {
    const post: Post = {
      id: this.posts.length + 1,
      caption,
      imageUrl,
      author,
      createdAt: new Date(),
    };
    this.posts.push(post);
    return post;
  }

  getAllPosts(): Post[] {
    return this.posts;
  }

  getPostById(id: number): Post {
    return this.posts.find(post => post.id === id);
  }
}
