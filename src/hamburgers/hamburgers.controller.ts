import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HamburgersService } from './hamburgers.service';
import { CreateHamburgerDto } from './dto/create-hamburger.dto';
import { UpdateHamburgerDto } from './dto/update-hamburger.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Hamburgers')
@Controller('hamburgers')
@IsPublic()
export class HamburgersController {
  constructor(private readonly hamburgersService: HamburgersService) {}

  @Post()
  create(@Body() createHamburgerDto: CreateHamburgerDto) {
    return this.hamburgersService.create(createHamburgerDto);
  }

  @Get()
  findAll() {
    return this.hamburgersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hamburgersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHamburgerDto: UpdateHamburgerDto,
  ) {
    return this.hamburgersService.update(+id, updateHamburgerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hamburgersService.remove(+id);
  }
}
