<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class CustomVerifyEmail extends Notification
{
    use Queueable;
    protected $name;
    /**
     * Create a new notification instance.
     */
    public function __construct($name)
    {
        //
        $this->name = $name;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        $random = Str::random(6);
        //if(Auth::check()){
            $user = auth()->user();

            if ($user) {
                $name = $user->name;
                // Now you can use $name or any other user properties
            } else {
                // User is not authenticated
            }
            

        return (new MailMessage)
            ->subject('Custom Subject') // Subject of the email
            ->greeting('Hello, ' . $this->name . '!') // Greeting at the beginning of the email
            ->line('This is the introduction to the notification.') // Regular text line
            ->action($random, url('')) // Action button with URL // Error message (styled differently)
            ->success('Operation completed successfully!') // Success message (styled differently)
            ->line('This is another regular text line.') // Another regular text line
            // ->attach(public_path('product/images/Screenshot 2023-11-29 001154.png'), [
            //     'as' => 'q7XX75j8K5Xa.jpeg',
            //     'mime' => 'image/jpeg',
            // ]) // Attach a file to the email
            ->with(['key' => 'value']) // Attach data to the notification (useful for the database channel)
            ->salutation('Thank you for using our application!'); // Closing salutation
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
