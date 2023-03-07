import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('bingo')
export class BingoController {
  private players = [];

  @Post('join')
  join(@Body() player): number {
    const playerId = this.players.length + 1;
    this.players.push({ ...player, id: playerId });
    return playerId;
  }

  @Post(':playerId/keep-alive')
  keepAlive(@Body() keepAlive): string {
    const { playerId } = keepAlive;
    const player = this.players.find((p) => p.id === playerId);
    if (player) {
      player.lastActive = new Date();
      return 'OK';
    } else {
      throw new Error(`Player ${playerId} not found`);
    }
  }

  @Post(':playerId/mark-row')
  markRow(@Body() row): string {
    const { playerId } = row;
    const player = this.players.find((p) => p.id === playerId);
    if (player) {
      player.row = row.row;
      return 'OK';
    } else {
      throw new Error(`Player ${playerId} not found`);
    }
  }

  @Post(':playerId/mark-bingo')
  markBingo(@Body() bingo): string {
    const { playerId } = bingo;
    const player = this.players.find((p) => p.id === playerId);
    if (player) {
      player.bingo = true;
      return 'OK';
    } else {
      throw new Error(`Player ${playerId} not found`);
    }
  }
}
