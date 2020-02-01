import { Controller , Get , Redirect} from '@nestjs/common';

@Controller('cats')
export class CatsController {
    
    @Get()
    // @Redirect("https://www.petsworld.in/blog/cat-pictures-funny-cute-adorable-and-all-time-favorite-cat-images.html")
    findAll(): string {
      return 'This action returns all cats';
    }
}
