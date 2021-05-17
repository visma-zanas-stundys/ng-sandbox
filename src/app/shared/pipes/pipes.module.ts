import { NgModule } from '@angular/core';
import { NowPipe } from './now.pipe';

@NgModule({
  declarations: [NowPipe],
  exports: [NowPipe],
})
export class PipesModule {}
