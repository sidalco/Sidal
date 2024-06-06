# Generated by Django 4.2.7 on 2023-11-24 22:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('company_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='catalogue',
            options={'ordering': ['name'], 'verbose_name': 'Catalogues'},
        ),
        migrations.AlterModelOptions(
            name='latestnews',
            options={'ordering': ['dateofEvent'], 'verbose_name': 'Our News'},
        ),
        migrations.AlterModelOptions(
            name='ourbranches',
            options={'ordering': ['name'], 'verbose_name': 'Our Branches'},
        ),
        migrations.AlterModelOptions(
            name='ourtechnologies',
            options={'ordering': ['name'], 'verbose_name': 'Our Technologies'},
        ),
        migrations.AlterField(
            model_name='catalogue',
            name='image',
            field=models.ImageField(default='', upload_to='Images/Catalogue/%y/%m%d', verbose_name='Catalogue Image'),
        ),
        migrations.AlterField(
            model_name='catalogue',
            name='pdf_file',
            field=models.FileField(upload_to='documents/Catalogue/%y/%m%d', verbose_name='Catalogue PDF file'),
        ),
        migrations.AlterField(
            model_name='latestnews',
            name='image',
            field=models.ImageField(default='', upload_to='Images/LatestNews/%y/%m%d', verbose_name='Image of Event'),
        ),
        migrations.AlterField(
            model_name='ourtechnologies',
            name='image',
            field=models.ImageField(default='', upload_to='Images/OurTechnologies/%y/%m%d', verbose_name='Symbol or Icon'),
        ),
    ]
