import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ChatService } from './chat.service';
import { AfterViewChecked, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CountryService } from '../services/country.service';
import { CityMarker } from '../services/model.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewInit, AfterViewChecked {

  public mensagens: Object[] = [];
  public mensagemInserir: string;

  public canCloseDialog: boolean;
  public mapStyle: Array<any>;
  public cityMarkers: Array<CityMarker>;

  @Input() owner: string;

  public messageResponses: Array<string> = [
    'How did the little Scottish dog feel when he saw a monster? Terrier-fied!',
    'Why did the dog cross the road? To get to the "barking" lot! ',
    'What is it called when a cat wins a dog show?  A CAT-HAS-TROPHY! ',
    'What kind of dog does Dracula have? A bloodhound!',
    'What happened when the dog went to the flea circus? He stole the show!',
    'What do you get if you cross a gold dog with a telephone?A golden receiver!',
    'What does my dog and my phone have in common? They both have collar I.D.',
    'What do you get if you cross a Beatle and an Australian dog?Dingo Starr!',
    'What do you call a dog magician? A labracadabrador.',
    'What do you get when you cross a race dog with a bumble bee? a Greyhound Buzz.',
    'Why wouldn\'t the dog sit on his chair? Because he left his sheet[shit] on there.',
    'What do you call a large dog that meditates? Aware wolf.',
    'Why did the dog need help on his Pros and Cons chart? He was CON-fused!',
    'What do you call a frozen dog? A pupsicle.',
    'What did the skeleton say to the puppy? bonappetite',
    'What do you get when you cross a dog and a calculator? A friend you can count on.',
    'Did you hear about the dog who couldn\'t stop talking like a horse? It was a dog and pony show.',
    'What do you get if you cross a sheepdog with a jelly? The collie wobbles!',
    'What do you call a black Eskimo dog? A dusky husky!',
    'What do you call a cold dog? A Chilli Dog.',
    'How is a dog and a marine biologist alike? One wags a tail and the other tags a whale.',
    'Never, ever, EVER leave your dog in a hot car ',
    'Make sure your dog is protected from parasites like fleas, ticks, and mosquitoes',
    'Keep your dog\'s paws cool',
    'Your dog should always have access to fresh drinking water and shade',
    'Give your dog his very own "kiddy pool',
    'Don\t assume your dog can swim well',
    'Dogs get sunburns too!',
    'If there’s no fence, keep your dog on a leash',
    'Watch your dog’s weight ',
    'Keep your windows screened!',
    'What did the dog say to the tree? Bark.',
    'What do you call a dog with a surround system? A sub-woofer.',
    ' What did the dog say to the sandpaper?Ruff!',
    'What happens when it rains cats and dogs? You can step in a poodle.',
    'What is a dog’s favorite city? New Yorkie!',
    'What is a dog’s ideal job? Barkeology!'
  ];



  @ViewChild('scrollMe') private scrollContainer: ElementRef;

  constructor(private _chatService: ChatService, private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    if (this.scrollContainer) {
      console.log(this.scrollContainer);
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    }
  }

  public enviaMensagem(event: any) {

    const objTyped = { message: event.target.value, author: this._chatService.nomeUsuario };
    const objRes = { message: this.getRandomItem(this.messageResponses), author: 'Unknowkn' };

    this.mensagens.push(objTyped);
    this.mensagens.push(objRes);

    this.mensagemInserir = '';
    event.target.value = null;

    this.scrollToBottom();
  }

  private getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  public closeDialog() {
    this.canCloseDialog = !this.canCloseDialog;
  }
}
