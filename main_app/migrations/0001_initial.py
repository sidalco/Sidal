# Generated by Django 4.2.7 on 2023-11-07 06:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AboutUS',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comapny_name', models.CharField(default='Sidal', max_length=50, verbose_name='Company Name')),
                ('descrip', models.TextField(verbose_name='Description of Company')),
                ('image', models.ImageField(default='', upload_to='AboutUS_Photos/%y/%m%d')),
            ],
        ),
        migrations.CreateModel(
            name='Catalogue',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='Catalogue Name')),
                ('language', models.CharField(max_length=50, verbose_name='catalogue language')),
                ('filepdf', models.FileField(upload_to=None, verbose_name='catalogue PDF')),
                ('image', models.ImageField(upload_to=None, verbose_name='image of catalogue')),
            ],
        ),
        migrations.CreateModel(
            name='ContactUs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50, verbose_name='Users Full Name')),
                ('user_email', models.EmailField(max_length=250, verbose_name='Users Email')),
                ('subject', models.CharField(max_length=70, verbose_name='Emailing Subject')),
                ('messageBody', models.TextField(verbose_name='Message Body')),
                ('phone', models.CharField(max_length=15, verbose_name='Users Phone')),
            ],
        ),
        migrations.CreateModel(
            name='LatestNews',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=90, verbose_name='Title')),
                ('descrip', models.TextField(verbose_name='Explanation')),
                ('dateofEvent', models.DateField(verbose_name='Date of Event')),
                ('image', models.ImageField(upload_to=None, verbose_name='Image')),
            ],
        ),
        migrations.CreateModel(
            name='MainPagePics',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='photo name')),
                ('image', models.ImageField(default='img_src/1.png', upload_to='MainPagePhotos/%y/%m%d', verbose_name='Photo of Main Page')),
            ],
        ),
        migrations.CreateModel(
            name='MainViewPage',
            fields=[
                ('id', models.PositiveIntegerField(primary_key=True, serialize=False, unique=True)),
                ('first_words', models.CharField(default='hello, here is', max_length=150, verbose_name='hello, here is...')),
                ('company_Name', models.CharField(max_length=150, verbose_name='Company Name in First Page')),
                ('Discription', models.TextField(verbose_name='here is descrip of Main Page')),
            ],
        ),
        migrations.CreateModel(
            name='OurBranches',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=70, verbose_name='Branch Name')),
                ('tele', models.CharField(max_length=15, verbose_name='Phone Number')),
                ('fax', models.CharField(max_length=15, verbose_name='Fax Number')),
                ('mail', models.EmailField(max_length=254, verbose_name='Brnach Email')),
                ('address', models.CharField(max_length=100)),
                ('website', models.URLField(max_length=300, verbose_name='Branch Website')),
                ('location', models.URLField(max_length=300, verbose_name=' GPS link in GoogleMaps')),
            ],
        ),
        migrations.CreateModel(
            name='OurTechnologies',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='Technology Name')),
                ('description', models.TextField(verbose_name='Description')),
                ('image', models.ImageField(upload_to=None, verbose_name='Icon of Tech')),
            ],
        ),
        migrations.CreateModel(
            name='Services',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('service_name', models.CharField(max_length=50, verbose_name='Service Name')),
                ('explanation', models.TextField(verbose_name='about Service')),
                ('icon', models.ImageField(upload_to=None, verbose_name='Icon')),
            ],
        ),
        migrations.CreateModel(
            name='SocialMediaLinks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('platform', models.CharField(max_length=70, verbose_name='Social Platform')),
                ('link', models.URLField(verbose_name='Our Page Link')),
                ('icons', models.CharField(max_length=50, verbose_name='FontAwesome Icon')),
            ],
        ),
    ]
