# Generated by Django 4.2.7 on 2023-11-07 07:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0003_alter_socialmedialinks_icons'),
    ]

    operations = [
        migrations.AlterField(
            model_name='services',
            name='icon',
            field=models.CharField(max_length=150, verbose_name='Icon from FontAwesome.com'),
        ),
        migrations.AlterField(
            model_name='socialmedialinks',
            name='icons',
            field=models.CharField(max_length=150, verbose_name='Icon from FontAwesome.com'),
        ),
    ]
