import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog Site';
  public qa1 = {id: 1, question1: 'What is the difference between git pull and git fetch?',answer1:'This operation never changes any of your own local branches under refs/heads, and is safe to do without changing your working copy. I have even heard of people running git fetch periodically in a cron job in the background (although I wouldnt recommend doing this).A git pull is what you would do to bring a local branch up-to-date with its remote version, while also updating your other remote-tracking branches.'}
    public qa2 = {id: 2, question2: 'How do I undo the most recent local commits in Git?',answer2:'Commit the changes, reusing the old commit message. reset copied the old head to .git/ORIG_HEAD; commit with -c ORIG_HEAD will open an editor, which initially contains the log message from the old commit and allows you to edit it. If you do not need to edit the message, you could use the -C option.Beware however that if you have added any new changes to the index, using commit --amend will add them to your previous commit.'}
  public  qa3 = {id: 3, question3: 'How do I undo git add before commit?',answer3:'You can undo git add before commit with git reset <file> which will remove it from the current index (the about to be committed list) without changing anything else. You can use git reset. In old versions of Git, the above commands are equivalent to git reset HEAD <file> and git reset HEAD respectively, and will fail if HEAD is undefined (because you havent yet made any commits in your repo) or ambiguous (because you created a branch called HEAD, which is a stupid thing that you shouldnt do). This was changed in Git 1.8.2, though, so in modern versions of Git you can use the commands above even prior to making your first commit.'}
   public qa4 = {id: 4, question4: 'What and where are the stack and heap?',answer4:'Programming language books explain that value types are created on the stack, and reference types are created on the heap, without explaining what these two things are. I havent read a clear explanation of this. I understand what a stack is. But,Where and what are they (physically in a real computers memory)?To what extent are they controlled by the OS or language run-time?    What is their scope?    What determines the size of each of them?    What makes one faster?'}
   public qa5 = {id: 5, question5: 'How to make Git “forget” about a file that was tracked but is now in .gitignore?',answer5:'.gitignore will prevent untracked files from being added (without an add -f) to the set of files tracked by git, however git will continue to track any files that are already being tracked.To stop tracking a file you need to remove it from the index. This can be achieved with this command.'}

}
