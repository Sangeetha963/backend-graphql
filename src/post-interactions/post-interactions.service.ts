// src/post-interactions/post-interactions.service.ts
import { Injectable } from '@nestjs/common';
import { Comment, Like } from './models/post-interaction.model';

@Injectable()
export class PostInteractionsService {
  private comments: Comment[] = [];
  private likes: Like[] = [];

  addComment(postId: number, user: string, text: string): Comment {
    const newComment: Comment = {
      postId,
      user,
      text,
      createdAt: new Date().toISOString(),
    };
    this.comments.push(newComment);
    return newComment;
  }

  addLike(postId: number, user: string): Like {
    const newLike: Like = {
      postId,
      user,
      createdAt: new Date().toISOString(),
    };
    this.likes.push(newLike);
    return newLike;
  }

  getAllComments(): Comment[] {
    return this.comments;
  }

  getAllLikes(): Like[] {
    return this.likes;
  }
}
