import { PartialType } from '@nestjs/swagger';
import { CreateHamburgerDto } from './create-hamburger.dto';

export class UpdateHamburgerDto extends PartialType(CreateHamburgerDto) {}
