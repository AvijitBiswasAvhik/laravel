<!DOCTYPE html>
<html lang="en">
<head>
    <title>{{ $data->title }}</title>
    <style>
        .heading {
            color: rgb(212, 85, 85);
        }

        .click-link {
            height: 30px;
            width: 80px;
            border: none;
            text-align: center;
            margin: 0 auto;
            background-color: grey;
            border-radius: 3px;
            display: block; /* Ensure the link takes full width */
            text-decoration: none; /* Remove default underline styling */
            line-height: 30px; /* Vertically center text in the link */
            color: white; /* Text color for better contrast */
        }
    </style>
</head>
<body>
    <h5>Hello <span class="heading">{{ $data->name }}</span></h5>

    <p>{{ $data->body }}</p>

    <a href="{{ $data->url }}" class="click-link">Click Here</a>

    <p>Thank you for using our service.</p>

    <p>Regards,<br>{{ config('app.name') }}</p>
</body>
</html>
